import { useState } from "react";
import { auth } from "firebase";
import { useNavigate } from "react-router";

interface FormDataTypes {
  name: string;
  email: string;
}

export const Profile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormDataTypes>({
    name: auth.currentUser?.displayName || "",
    email: auth.currentUser?.email || "",
  });

  const onLogout = () => {
    auth.signOut();
    navigate("/");
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
              disabled
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
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
                <span className="text-red-600 hover:text-red-700 cursor-pointer transition ease-in-out duration-200 ml-1">
                  Edit
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
        </div>
      </section>
    </>
  );
};
