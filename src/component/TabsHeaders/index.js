import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


/******
 * This component display the list of headers
 * This is used in test feedback tab sections
 *****/

const TabsContainer = styled.div`
	width: 100%;
	display: flex;
	white-space: nowrap;
	overflow-x: auto;
	overflow-y: hidden;
	position: relative;
	font-weight: 400;
	border-bottom: 1px solid #d0d0d0;
	@media all and (max-width: 1023px) {
		${props => props.mobileHeaderCss};
	}
`;
const Tab = styled.div`
	cursor: pointer;
	${props => props.tabCss}
	${props => (props.isActive ? 'border-bottom: solid 3px #4ab7e8; color: #4ab7e8 !important;' : {})};
	@media all and (max-width: 1023px) {
		${props => props.mobileTabCss}
	}
`;
const TabContent = styled.div``;

const TabHeaders = React.memo(
	({
		sectionTabs,
		activeSection,
		switchTab,
		className,
		mobileHeaderCss,
		mobileTabCss,
		tabCss,
	}) => {
		return (
			<TabsContainer className={`${className} hide-scrollbar`} mobileHeaderCss={mobileHeaderCss}>
				{sectionTabs.map((section,index) => {
					return (
						<Tab
							key={section.id}
							isActive={activeSection === section.name}
							onClick={() => {
								switchTab(index,section);
							}}
							tabCss={tabCss}
							mobileTabCss={mobileTabCss}
						>
							<TabContent className='section-name'>{section.name}</TabContent>
						</Tab>
					);
				})}
			</TabsContainer>
		);
	}
);

export default TabHeaders;

TabHeaders.defaultProps = {
	sectionTabs: [],
	activeSection: '',
	switchTab: _ => {},
	mobileHeaderCss: {
		// backgroundColor: '#fff',
		fontWeight: 400,
		// boxShadow: '0 2px 3px 0 rgba(0, 0, 0, 0.2)',
		zIndex: 1
	},
	tabCss: { padding: '8px 22px', cursor: 'pointer', fontSize: '16px' },
	mobileTabCss: { padding: '8px 16px', fontSize: '14px' },
	className: 'tf-card-section-header',
	scrollIntoView: true
};
TabHeaders.propTypes = {
	sectionTabs: PropTypes.array,
	activeSection: PropTypes.string,
	switchTab: PropTypes.func,
	handleSegment: PropTypes.func,
	scrollIntoView: PropTypes.bool
};
