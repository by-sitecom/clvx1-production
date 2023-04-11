
"use client";
import { fetchAPI } from "@/lib/client/graphql-client";
import { ADD_USER } from "@/lib/querys/add-user";
import Image from "next/image";
import { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
export const Form = ({
  handleClose,
  open
}: {
  handleClose: any;
  open: boolean;
}) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [send, setSend] = useState(false);

  const handleSubmit = async (evt: { preventDefault: () => void }) => {
    evt.preventDefault();

    const data = await fetchAPI(ADD_USER, {
      input: {
        clientMutationId: "uniqueId",
        username: email,
        firstName: name,
        password: ">G0xe>GBAuT3x>GGBrAGBA",
        email: email,
      },
    });

    if (data) {
      setSend(true)
      console.log("send", data);
    }

  };

  
  return (
    <div className={open ? "menu open" : "menu"}>
      <div className="menu_header">
        <Image src="/logo.svg" width={174.56} height={20} alt="Clevetura" />
        <div className="close" onClick={handleClose}>
          <Image src="/close.svg" width={20} height={20} alt="Clevetura" />
        </div>
      </div>
      <div className="menu_main">
        <form onSubmit={handleSubmit} className="form">
          <div className="form_grid">
            <div className="form_title">
              Join waitlist for Kickstarter to get CLVX 1 for $129{" "}
              <span>$149</span>
            </div>
            {send && <div className="form_send">Thank you for registering</div>}
            <div>
              <label className="label">Your Name</label>
              <input
                placeholder=""
                className="input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="label">Email</label>
              <input
                placeholder=""
                className="input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button className="btn">Send message</button>
          </div>
        </form>
      </div>
    </div>
  );
};
