export const TAB_DATA = 'TAB_DATA';
export const ACTIVE_CLASS_DATA = 'ACTIVE_CLASS_DATA';


export function getTabData() {
	// debugger;
	return dispatch => {
		const data = navBarTabData;
		dispatch({ type: TAB_DATA, payload: data });
	};
}

export function getActiveClassTabData() {
	// debugger;
	return dispatch => {
		const data = activeClassTabData;
		dispatch({ type: ACTIVE_CLASS_DATA, payload: data });
	};
}

const activeClassTabData=[
	{
	  id: 1,
	  name: "Foundation Program",
	  value: [
		{
		  heading: "History",
		  title: "Session",
		  completed: 1,
		  remaining: 2
		},
		{
		  heading: "Botany",
		  title: "Session",
		  completed: 2,
		  remaining: 4
		},
		{
		  heading: "Chemisty",
		  title: "Session",
		  completed: 1,
		  remaining: 3
		}
	  ]
	},
	{
	  id: 2,
	  name: "Advance Program",
	  value: [
		{
		  heading: "Physics",
		  title: "Session",
		  completed: 1,
		  remaining: 2
		},
		{
		  heading: "Maths",
		  title: "Session",
		  completed: 2,
		  remaining: 4
		},
		{
		  heading: "Chemisty",
		  title: "Session",
		  completed: 1,
		  remaining: 3
		},
		{
		  heading: "English",
		  title: "Session",
		  completed: 1,
		  remaining: 3
		}
	  ]
	}
  ];




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