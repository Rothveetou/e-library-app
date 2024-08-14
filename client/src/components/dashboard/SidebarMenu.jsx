import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import Logo from "../../assets/react.svg";
import {
  HiArrowSmRight,
  HiBookOpen,
  HiChartPie,
  HiInbox,
  HiOutlineCloudUpload,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { HiBookmark } from "react-icons/hi2";

function SidebarMenu() {
  return (
    <Sidebar
      aria-label="Sidebar with content separator example"
      className="h-min-screen w-64 bg-blue-900"
    >
      <Sidebar.Logo
        href="#"
        img={Logo}
        imgAlt="Flowbite logo"
        className="rounded border"
      >
        <h2 className="text-3xl text-center leading-snug font-semibold">
          Books
        </h2>
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            href="/admin/dashboard/upload-books"
            icon={HiOutlineCloudUpload}
            className="text-xl py-4 pr-6 "
          >
            Upload Books
          </Sidebar.Item>
          <Sidebar.Item
            href="/admin/dashboard/manage-books"
            icon={HiBookmark}
            className="text-xl py-4 pr-6 "
          >
            Manage Books
          </Sidebar.Item>
          <Sidebar.Item
            href="/admin/dashboard/users"
            icon={HiUser}
            className="text-xl py-4 pr-6 "
          >
            Users
          </Sidebar.Item>
          <Sidebar.Item
            href="/admin/dashboard/all-books"
            icon={HiBookOpen}
            className="text-xl py-4 pr-6 "
          >
            Books
          </Sidebar.Item>
          <Sidebar.Item
            href="/admin/dashboard/log-in"
            icon={HiArrowSmRight}
            className="text-xl py-4 pr-6 "
          >
            Sign In
          </Sidebar.Item>
          <Sidebar.Item
            href="/admin/dashboard/log-out"
            icon={HiTable}
            className="text-xl py-4 pr-6 "
          >
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            href="#"
            icon={HiChartPie}
            className="text-xl py-4 pr-6 "
          >
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            icon={HiViewBoards}
            className="text-xl py-4 pr-6 "
          >
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy} className="text-xl py-4 pr-6 ">
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default SidebarMenu;
