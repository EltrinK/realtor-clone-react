import React, { useState } from "react";
import { auth, db } from "firebase";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { FcHome } from "react-icons/fc";
import { Link } from "react-router-dom";

interface FormDataTypes {
  name: string;
  email: string;
}

export const Profile = () => {
  const navigate = useNavigate();
  const [changeDetail, setChangeDetail] = useState(false);
  const [formData, setFormData] = useState<FormDataTypes>({
    name: auth.currentUser?.displayName || "",
    email: auth.currentUser?.email || "",
  });

  const onLogout = () => {
    auth.signOut();
    navigate("/");
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => {
      const target = e.target as HTMLInputElement;

      return {
        ...prevState,
        [target.name]: target.value,
      };
    });
  };

  const onSubmit = async () => {
    try {
      if (auth.currentUser?.displayName !== name) {
        // update the display name
        if (auth.currentUser) {
          await updateProfile(auth.currentUser, {
            displayName: name,
          });
        }
        // update name in the firestore
        const uid = auth.currentUser?.uid;
        if (uid) {
          const docRef = doc(db, "users", uid);
          await updateDoc(docRef, {
            name,
          });
        }
        toast.success("Profile updated");
      }
    } catch {
      toast.error("Could not update the profile details");
    }
  };

  const { name, email } = formData;
  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
        <div className="w-full md:w-[50%] mt-6 px-3">
          <form>
            <input
              type="text"
              name="name"
              value={name}
              onChange={onChange}
              disabled={!changeDetail}
              className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out ${
                changeDetail && "bg-red-200 focus:bg-red-200"
              }`}
            />
            <input
              type="email"
              name="email"
              value={email}
              disabled
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
            />
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
              <p className="flex justify-items-center">
                Do you want to change your name?
                <span
                  onClick={() => {
                    changeDetail && onSubmit();
                    setChangeDetail((prevState) => !prevState);
                  }}
                  className="text-red-600 hover:text-red-700 cursor-pointer transition ease-in-out duration-200 ml-1"
                >
                  {changeDetail ? "Apply Change" : "Edit"}
                </span>
              </p>
              <p
                onClick={onLogout}
                className="text-blue-600 hover:text-blue-800 cursor-pointer transition ease-in-out duration-200"
              >
                Sign out
              </p>
            </div>
          </form>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white uppercase px-7 py-3 text-sm font-medium rounded shadow-md hover:bg-blue-800 transition duration-200 ease-in-out hover:shadow-lg active:bg-blue-800"
          >
            <Link
              to="/create-listing"
              className="flex justify-center items-center"
            >
              <FcHome className="mr-2 text-3xl bg-red-200 rounded-full p-1 border-2" />
              Sell or rent your home
            </Link>
          </button>
        </div>
      </section>
    </>
  );
};
