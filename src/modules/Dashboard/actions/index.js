export const TAB_DATA = 'TAB_DATA';

export function getTabData() {
	// debugger;
	return dispatch => {
		const data = navBarTabData;
		dispatch({ type: TAB_DATA, payload: data });
	};
}



const navBarTabData=[
	{
	  id: 1,
	  name: "Clasroom"
	},
	{
	  id: 2,
	  name: "Profile"
	},
	{
	  id: 3,
	  name: "Portfolio"
	}
  ]