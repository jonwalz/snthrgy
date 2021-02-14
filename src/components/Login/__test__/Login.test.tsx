import * as React from "react";
import {render} from "@testing-library/react";
import {Login} from "../Login";

describe("Login", () => {
  it("should match snapshot", () => {
    const wrapper = render(<Login />);

    expect(wrapper).toMatchSnapshot();
  });
});
