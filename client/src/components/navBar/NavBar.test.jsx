import React from "react";
import { getAllByRole, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import NavBar from "./NavBar";
import { BrowserRouter } from "react-router-dom";

describe("Tests in <NavBar />", () => {
    const initialState = { output: 10 };
    const mockStore = configureStore();
    let store;
    store = mockStore(initialState);
    const { getByText } = render(
        <Provider store={store}>
            <BrowserRouter>
                <NavBar />
            </BrowserRouter>
        </Provider>
    );

    test("Test if text VideoGames is found", () => {
        expect(getByText("VideoGames")).toBeTruthy();
    });
    
    const listLinks = screen.getAllByRole('link');
    test("Should render Two <Link />", () => {
        expect(listLinks).toHaveLength(2);
    });

    test('The first Link should have the text "VideoGames" and change the path to "/home".', () => {
        expect(listLinks.at(0).href).toContain("/home");
        expect(listLinks.at(0).querySelector("p").textContent).toEqual("VideoGames");
    });

    test('The second Link should have the text "New Game" and change the path to "/newgame".', () => {
        expect(listLinks.at(1).href).toContain("/newgame");
        expect(listLinks.at(1).textContent).toEqual("New Game");
    });

    const listSelects = screen.getAllByRole('combobox');
    test("Should render Three <Select />", () => {
        expect(listSelects).toHaveLength(3);
    });

    const searchBar = screen.getByTestId('searchbar');
    test("Should render one Search Bar", () => {
        expect(searchBar).not.toBeNull();
    });
});
