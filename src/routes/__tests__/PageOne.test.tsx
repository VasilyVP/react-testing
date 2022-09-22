import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { renderRoute } from "helpers/tests"
//import { act } from "react-dom/test-utils"


describe('PageOne', () => {
    it('should match snapshot', () => {
        const { container } = renderRoute({ initialRoute: '/page_one' });
        expect(container).toMatchSnapshot();
    })

    test('clicks + and -', () => {
        renderRoute({ initialRoute: '/page_one' });

        const btnPlus = screen.getByTestId('click+');
        const btnMinus = screen.getByTestId('click-');
        const countEl = screen.getByTestId('count');

        expect(countEl.textContent).toBe('Count: 0');

        userEvent.click(btnPlus);
        expect(countEl.textContent).toBe('Count: 1');

        userEvent.click(btnMinus);
        expect(countEl.textContent).toBe('Count: 0');
    })

    test('back link', () => {
        renderRoute({ initialRoute: '/page_one' });

        const backLink = screen.getByTestId('back_link');
        userEvent.click(backLink);
        const mp = screen.getByTestId('main_page');
        expect(mp).toBeInTheDocument();
    })
})
