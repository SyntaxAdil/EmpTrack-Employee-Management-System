import { Facebook, FacebookIcon, Github, Linkedin } from "lucide-react";
import React from "react";
import CanceledError from "./../../../node_modules/axios/lib/cancel/CanceledError";

const Footer = () => {
  return (
    <footer className="footer px-4 bg-base-300 min-w-full max-w-full w-full ">
      <footer className="footer sm:footer-horizontal  max-w-5xl w-full mx-auto text-base-content  mt-10">
        <nav>
          <h6 className="footer-title text-emerald-300">Features</h6>
          <a className="link link-hover">Add Employee</a>
          <a className="link link-hover">Edit Employee</a>
          <a className="link link-hover">Delete Employee</a>
          <a className="link link-hover">Favorite Employees</a>
        </nav>

        <nav>
          <h6 className="footer-title mt-4 md:mt-0 text-emerald-300">
            Project
          </h6>
          <a className="link link-hover">About Project</a>
          <a className="link link-hover">Documentation</a>
          <a className="link link-hover">API</a>
          <a className="link link-hover">Contact</a>
        </nav>

        <nav>
          <h6 className="footer-title mt-4 md:mt-0 text-emerald-300">Developer</h6>
          <div className="grid grid-flow-col gap-4">
            <a
              className="cursor-pointer"
              href="https://github.com/SyntaxAdil"
              target="_blank"
            >
              <Github />
            </a>

            <a
              className="cursor-pointer"
              href="https://www.facebook.com/share/15Y7LYT6MZ/"
              target="_blank"
            >
              <FacebookIcon />
            </a>

            <a
              className="cursor-pointer"
              href="https://www.linkedin.com/in/devloper-abdur-rahman"
              target="_blank"
            >
              <Linkedin />
            </a>
          </div>
        </nav>
      </footer>
      <p className="text-neutral-600 text-center mx-auto my-4">
        Copyright © {new Date().getFullYear()} - All right reserved by Abdur
        Rahman Adil
      </p>
    </footer>
  );
};

export default Footer;
