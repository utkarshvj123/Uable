export const TAB_DATA = 'TAB_DATA';

export function getTabData() {
	debugger;
	return dispatch => {
		const data = 'hello dataaaaaaaaaaa';
		dispatch({ type: TAB_DATA, payload: data });
	};
}
