import {User} from "./../app.d";
import {atom} from "jotai";
import {atomWithQuery} from "jotai/query";
import {fetchUsers} from "../client";

export const idAtom = atom(0);
export const fullNameAtom = atom("");

export const userAtom = atom(
  get => ({
    fullName: get(fullNameAtom),
    id: get(idAtom),
  }),
  (_, set, arg: User) => {
    set(fullNameAtom, arg.fullName);
  }
);

export const userDBAtom = atomWithQuery(get => ({
  queryKey: ["user", get(idAtom)],
  queryFn: async ({queryKey: [, id]}) => {
    // const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return fetchUsers(id);
  },
}));
