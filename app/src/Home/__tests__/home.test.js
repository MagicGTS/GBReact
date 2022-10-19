import { render, screen } from '@testing-library/react';
import Home from '../Home';

describe('snapshot tests', () => {
    it('matches snapshot with article', () => {
        const component = render(<Home />);
        expect(component).toMatchSnapshot();
    });
    // more tests...
});
