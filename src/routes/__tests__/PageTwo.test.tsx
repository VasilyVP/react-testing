import { screen } from "@testing-library/react"
import { renderRoute } from "helpers/tests"
import userEvent from "@testing-library/user-event"


/* jest.mock('hooks/useUsers', () => ({
    __esModule: true,
    default: () => dummyUsers,
})); */

jest.mock('hooks/useUsers');

describe('PageTwo', () => {
    it('should match snapshot', () => {
        const { container } = renderRoute({ initialRoute: '/page_two' });
        expect(container).toMatchSnapshot();
    })

    it('should load the users', async () => {
        renderRoute({ initialRoute: '/page_two' });
        const liItems = await screen.findAllByRole('listitem');

        expect(liItems.length).toBe(3);
    })
    
    test('back link', () => {
        renderRoute({ initialRoute: '/page_two' });
        
        const backLink = screen.getByTestId('back_link');
        userEvent.click(backLink);
        const mp = screen.getByTestId('main_page');
        expect(mp).toBeInTheDocument();
    })
})
