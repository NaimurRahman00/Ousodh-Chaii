import useAuth from "../../hooks/useAuth";
import useRole from "../../hooks/useRole";
import { FaPen } from "react-icons/fa6";

const ProfileModal = ({ openProfileModal, setOpenProfileModal }) => {
  const { user } = useAuth();
  const [role, isLoading] = useRole();
  return (
    <div className="mx-auto flex w-2/3 items-center justify-center">
      <div
        onClick={() => setOpenProfileModal(false)}
        className={`fixed z-[100] flex items-center justify-center ${
          openProfileModal ? "opacity-1 visible" : "invisible opacity-0"
        } inset-0 bg-black/20 backdrop-blur-sm duration-100`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`absolute rounded-2xl drop-shadow-2xl ${
            openProfileModal
              ? "opacity-1 translate-y-0 duration-300"
              : "translate-y-20 opacity-0 duration-150"
          }`}
        >
          <div className="max-w-[350px] mx-auto space-y-8 rounded-2xl bg-[#18181B] px-6 py-8 shadow-md md:max-w-[350px]">
            {/* profile image & bg  */}
            <div className="relative ">
              <div className="w-[300px] bg-[#7FBA5A] rounded-2xl">
                <img
                  width={350}
                  height={150}
                  className="h-[150px] w-fit"
                  src="https://i.ibb.co/3kkFkG0/Screenshot-2024-06-09-231446-removebg-preview.png"
                  alt="card navigate ui"
                />
              </div>
              <img
                width={100}
                height={100}
                className="absolute -bottom-12 left-1/2 h-[100px] w-[100px] -translate-x-1/2 rounded-full border-4 border-[#18181B] bg-gray-400 object-cover"
                src="https://i.ibb.co/jwThMvm/PHero-Naimur.jpg"
                alt="card navigate ui"
              />
              <FaPen className="absolute text-white -bottom-9 cursor-pointer left-1/2 -translate-x-1/2"/>{" "}
            </div>
            {/* profile name & role */}
            <div className="space-y-1 pt-8 text-center">
              <h1 className="text-xl md:text-2xl text-white/80 flex items-center justify-center gap-2">
                {user?.displayName}{" "}
                <FaPen className="text-sm cursor-pointer mt-1 hover:text-white" />
              </h1>
              <p className="text-sm text-gray-400">{role}</p>
            </div>
            {/* post , followers following  */}
            <div className="flex flex-wrap items-center justify-between px-4">
              <div className="text-center">
                <h5 className="text-xl font-medium text-white/75">12</h5>
                <p className="text-sm text-gray-400">Seller</p>
              </div>
              <div className="text-center">
                <h5 className="text-xl font-medium text-white/75">2.7k</h5>
                <p className="text-sm text-gray-400">User</p>
              </div>
              <div className="text-center">
                <h5 className="text-xl font-medium text-white/75">217k</h5>
                <p className="text-sm text-gray-400">Visitors</p>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="w-[80%] rounded-full py-2 font-medium text-gray-400 shadow-[0px_0px_10px_#E2DADA] duration-500  hover:scale-95 hover:bg-[#0095FF] hover:text-white hover:shadow-xl dark:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.8)]">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
