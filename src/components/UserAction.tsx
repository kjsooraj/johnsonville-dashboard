/* eslint-disable no-console */
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { login, logout } from "@/redux/features/authSlice";
import * as Avatar from "@/components/core/Avatar";
import { Button } from "@/components/core/Button";
import * as Dropdown from "@/components/core/Dropdown";
import { Icon } from "@/components/core/Icon";

export default function UserAction() {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  if (!user) {
    return <Button onClick={() => dispatch(login())}>Login</Button>;
  }

  return (
    <Dropdown.DropdownRoot>
      <Dropdown.DropdownTrigger asChild>
        <Avatar.AvatarRoot>
          <Avatar.AvatarImage
            src={user.user_metadata.avatar_url}
            alt={user.user_metadata.email}
          />
          <Avatar.AvatarFallback>
            {user.user_metadata.name.slice(0, 1)}
          </Avatar.AvatarFallback>
        </Avatar.AvatarRoot>
      </Dropdown.DropdownTrigger>
      <Dropdown.DropdownContent>
        <Dropdown.DropdownLabel>
          {user.user_metadata.email}
        </Dropdown.DropdownLabel>
        <Dropdown.DropdownSeparator />
        <Dropdown.DropdownGroup>
          <Dropdown.DropdownItem asChild>
            <Link to="settings" className="flex items-center space-x-2">
              <Icon icon="settings" className="h-4 w-4" />
              <span>Setting</span>
            </Link>
          </Dropdown.DropdownItem>
          <Dropdown.DropdownItem onClick={() => dispatch(logout())}>
            <div className="flex items-center space-x-2">
              <Icon icon="logout" className="h-4 w-4" />
              <span>Logout</span>
            </div>
          </Dropdown.DropdownItem>
        </Dropdown.DropdownGroup>
      </Dropdown.DropdownContent>
    </Dropdown.DropdownRoot>
  );
}
