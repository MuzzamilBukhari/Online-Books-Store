import { useState } from "react";
import { Button, Input } from "../";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { closePopup } from "../../store/popupSlice";

const Popup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const orderPopup = useSelector((state: RootState) => state.popup.status);

  return (
    <>
      {orderPopup && (
        <div className="w-screen h-screen fixed top-0 left-0 z-20 backdrop-blur-sm shadow-md bg-black/50 duration-200">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-white text-black dark:bg-gray-900 dark:text-white p-4 rounded-lg w-[300px] shadow-md">
            <div className="flex justify-center items-center flex-col gap-4 ">
              <div className="flex justify-between items-center w-full  p-2 font-semibold ">
                <h1 className="">Order your book</h1>
                <h1
                  className="cursor-pointer"
                  onClick={() => dispatch(closePopup())}
                >
                  X
                </h1>
              </div>
              <div className="flex justify-center items-center gap-3 flex-col w-full p-2">
                <Input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className=""
                />
                <Input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className=""
                />
                <Input
                  type="text"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className=""
                />
                <Button type="submit" className="px-4">
                  Order now
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
