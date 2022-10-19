import { getAuthSuccess } from '../userSlice.js'
import userReducer from '../userSlice.js'
describe('snapshot tests', () => {
    it('returns correct state after SET_NAME action', () => {
        const userStore = userReducer(undefined, getAuthSuccess('test'));
        expect(userStore).toMatchSnapshot();
        });
    // more tests...
});
