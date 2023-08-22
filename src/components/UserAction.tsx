import { Link } from "react-router-dom";
import { mergeNames } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { login, logout } from "@/redux/features/authSlice";
import * as Avatar from "@/components/core/Avatar";
import { Button } from "@/components/core/Button";
import * as Dropdown from "@/components/core/Dropdown";
import { Icon } from "@/components/core/Icon";
import { Toggle } from "@/components/core/Toggle";

export default function UserAction() {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  return (
    <>
      {user ? (
        <Dropdown.DropdownRoot>
          <Dropdown.DropdownTrigger asChild>
            <Toggle>
              <Avatar.AvatarRoot>
                <Avatar.AvatarImage
                  src={user.user_metadata.avatar_url}
                  alt={user.user_metadata.email}
                ></Avatar.AvatarImage>
                <Avatar.AvatarFallback>
                  {user.user_metadata.name.slice(0, 1)}
                </Avatar.AvatarFallback>
              </Avatar.AvatarRoot>
            </Toggle>
          </Dropdown.DropdownTrigger>
          <Dropdown.DropdownContent align="end" sideOffset={16}>
            <Dropdown.DropdownLabel className="flex items-center space-x-3">
              <Avatar.AvatarRoot>
                <Avatar.AvatarImage
                  src={user.user_metadata.avatar_url}
                  alt={user.user_metadata.email}
                ></Avatar.AvatarImage>
                <Avatar.AvatarFallback>
                  {user.user_metadata.name.slice(0, 1)}
                </Avatar.AvatarFallback>
              </Avatar.AvatarRoot>
              <div className="flex flex-col">
                <div className="flex items-center space-x-2">
                  <h5 className="text-color-secondary">
                    {`${user.user_metadata.name
                      .slice(0, 1)
                      .toUpperCase()}${user.user_metadata.name
                      .slice(1)
                      .toLowerCase()}`}
                  </h5>
                  {user.user_metadata.email_verified && (
                    <Icon
                      icon="verified"
                      label="verified email"
                      className={mergeNames([
                        "fill-color-info",
                        "stroke-color-primary",
                      ])}
                    ></Icon>
                  )}
                </div>
                <p className="text-xs">{user.user_metadata.email}</p>
              </div>
            </Dropdown.DropdownLabel>
            <Dropdown.DropdownSeparator />
            <Dropdown.DropdownGroup>
              <Dropdown.DropdownItem asChild>
                <Link to="account" className="flex items-center space-x-4">
                  <Icon icon="user" className="h-4 w-4" />
                  <span>Account</span>
                </Link>
              </Dropdown.DropdownItem>
              <Dropdown.DropdownItem asChild>
                <Link to="settings" className="flex items-center space-x-4">
                  <Icon icon="settings" className="h-4 w-4" />
                  <span>Setting</span>
                </Link>
              </Dropdown.DropdownItem>
              <Dropdown.DropdownSeparator />
              <Dropdown.DropdownItem onClick={() => dispatch(logout())}>
                <div className="flex items-center space-x-4">
                  <Icon icon="logout" className="h-4 w-4" />
                  <span>Logout</span>
                </div>
              </Dropdown.DropdownItem>
            </Dropdown.DropdownGroup>
          </Dropdown.DropdownContent>
        </Dropdown.DropdownRoot>
      ) : (
        <Button onClick={() => dispatch(login())}>Login</Button>
      )}
    </>
  );
}
