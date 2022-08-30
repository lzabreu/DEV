import { Link } from "react-router-dom";
import { LoggedUserContext } from "../../shared/contexts";
import { Menu } from "../../shared/components/Menu";
import { newLoggedUser } from "../../shared/hooks";
import { useCallback, useState } from "react";

interface IListItem {
  title: string;
  isSelected: boolean;
}
export const Dashboard = () => {
  const { loggedUser, logOut } = newLoggedUser();
  const [list, setList] = useState<IListItem[]>([]);
  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> =
    useCallback((e) => {
      if (e.key === "Enter") {
        if (e.currentTarget.value.trim().length === 0) {
          e.currentTarget.value = "";
          return;
        }
        const value = e.currentTarget.value;
        e.currentTarget.value = "";
        setList((oldList) => {
          if (oldList.some((listItem) => listItem.title === value)) {
            return oldList;
          } else {
            return [...oldList, { title: value, isSelected: false }];
          }
        });
      }
    }, []);
  return (
    <div>
      <Menu />
      <p>{loggedUser}</p>
      <input
        className="border border-2px border-blue-500 rounded-md bg-blue-100"
        type="text"
        onKeyDown={handleInputKeyDown}
      />
      <button
        className=" rounded-md bg-blue-300 pl-2 pr-2 m-6"
        onClick={logOut}
      >
        Sair
      </button>
      <p>{list.filter((listItem) => listItem.isSelected).length}</p>
      <ul>
        {list.map((listItem, index) => {
          return (
            <li key={listItem.title} className="ml-4">
              <input
                className="mr-2"
                type="checkbox"
                checked={listItem.isSelected}
                onChange={() => {
                  setList((oldList) => {
                    return oldList.map((oldListItem) => {
                      const newIsSelected =
                        oldListItem.title === listItem.title
                          ? !oldListItem.isSelected
                          : oldListItem.isSelected;
                      return {
                        ...oldListItem,
                        isSelected: newIsSelected,
                      };
                    });
                  });
                }}
              />
              {listItem.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
