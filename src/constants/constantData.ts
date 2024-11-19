import { IoIosHome } from "react-icons/io";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import {
  MdPeopleOutline,
  MdLogout,
  MdAnnouncement,
  MdSettings,
} from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";
import { SiBookstack, SiGoogleclassroom } from "react-icons/si";
import { FaBookReader, FaUserCircle } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { BsCalendarEvent, BsEnvelope } from "react-icons/bs";
import React from "react";

export const menuItems = [
  {
    title: "MENU",
    items: [
      {
        title: "Home",
        path: "/",
        icon: React.createElement(IoIosHome),
      },
      {
        title: "Teachers",
        path: "/teachers",
        icon: React.createElement(LiaChalkboardTeacherSolid),
      },
      {
        title: "Student",
        path: "/students",
        icon: React.createElement(IoPersonCircleOutline),
      },
      {
        title: "Parents",
        path: "/parents",
        icon: React.createElement(MdPeopleOutline),
      },
      {
        title: "Classes",
        path: "/classes",
        icon: React.createElement(SiGoogleclassroom),
      },
      {
        title: "Lessons",
        path: "/lessons",
        icon: React.createElement(FaBookReader),
      },
      {
        title: "Exams",
        path: "/exams",
        icon: React.createElement(GiGraduateCap),
      },
      {
        title: "Assignments",
        path: "/assignments",
        icon: React.createElement(SiBookstack),
      },
      {
        title: "Attendance",
        path: "/attendances",
        icon: React.createElement(FaUserCircle), // User icon for Attendance
      },
      {
        title: "Events",
        path: "/events",
        icon: React.createElement(BsCalendarEvent), // Calendar event icon
      },
      {
        title: "Messages",
        path: "/messages",
        icon: React.createElement(BsEnvelope), // Envelope icon for Messages
      },
      {
        title: "Announcements",
        path: "/announcements",
        icon: React.createElement(MdAnnouncement), // Announcement icon
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        title: "Profile",
        path: "/profile",
        icon: React.createElement(FaUserCircle),
      },
      {
        title: "Settings",
        path: "/settings",
        icon: React.createElement(MdSettings),
      },
      {
        title: "Logout",
        path: "/logout",
        icon: React.createElement(MdLogout),
      },
    ],
  },
];
