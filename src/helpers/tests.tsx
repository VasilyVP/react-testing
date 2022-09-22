//import { ReactElement } from 'react'
import { render } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom'
import TopLevelRoutes from 'routes/TopLevelRoutes'

type WithRouterProps = {
    //component: ReactElement;
    initialRoute: string;
}
export function renderRoute({ initialRoute }: WithRouterProps = { initialRoute: '/' }) {
    return render(
        <MemoryRouter initialEntries={[initialRoute]}>
            <TopLevelRoutes />
        </MemoryRouter>
    )
}
