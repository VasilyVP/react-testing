import { screen } from "@testing-library/react";
import { renderRoute } from "helpers/tests";
import userEvent from "@testing-library/user-event";


describe('MainPage', () => {
    it('header should be rendered', () => {
        renderRoute();
        const header = screen.getByText('Pages:');

        expect(header).toBeInTheDocument();
    })

    test('page1 route', () => {
        renderRoute();

        const link = screen.getByTestId('page_one_link');
        userEvent.click(link);
        const container = screen.getByTestId('page_one');
        expect(container).toBeInTheDocument();
    })

    test('page2 route', () => {
        renderRoute();

        const link = screen.getByTestId('page_two_link');
        userEvent.click(link);
        const title = screen.getByTestId('page_two');
        expect(title).toBeInTheDocument();        
    })
})
