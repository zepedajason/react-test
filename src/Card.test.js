import { render, fireEvent } from "@testing-library/react";
import Card from "./Card.js";

it('should render', () => {
    render(<Card caption="Rusty" src="" currNum="" totalNum="" />)
})

it('should match snapshot', () => {
    const {asFragment} = render(<Card caption="Rusty" src="" currNum="" totalNum="" />);
    expect(asFragment()).toMatchSnapshot();
  })
  