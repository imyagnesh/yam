import React from 'react';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';
import Skills from '../Skills';

const ContentWrapper = styled.div`
    max-width: 1024px;
    margin: 20px auto;
`;


const PaperWrapper = styled(Paper) `
	margin: 8px;
`;

const SkillsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`;

const ResumeLanguages = props => {
	return (
		<ContentWrapper>
			<PaperWrapper>
				<SkillsWrapper>
					<Skills title="English" rating={3.5} />
					<Skills title="Hindi" rating={3.5} />
					<Skills title="Gujarati" rating={3.5} />
				</SkillsWrapper>
			</PaperWrapper>
		</ContentWrapper>
	);
};

ResumeLanguages.propTypes = {

};

export default ResumeLanguages;