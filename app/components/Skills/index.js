import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Divider from 'material-ui/Divider';
import Ratting from '../Ratting';

const Content = styled.div`
	display: flex;
	flex-direction: column;
	padding: 16px;
	width: 250px;
	justify-content: center;
  align-items: center;
`;

const SkillTittle = styled.div`
	
`;

const RattingWrapper = styled.div`
	display: flex;
	height: 40px;
	justify-content: center;
  align-items: center;
`;

const Description = styled.div`
	text-align: center;
	display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  white-space: normal;
  height: 75px;
  overflow: hidden;
`;

const skills = ({ title, rating, description }) => {
	return (
		<Content>
			<SkillTittle>{title}</SkillTittle>
			<RattingWrapper>
				<Ratting rating={rating} circle />
				<div style={{ margin: 8 }}>{rating}/5</div>
			</RattingWrapper>
			{ description && <Divider style={{ width: '80%', margin: 8 }} />}
			{ description && <Description>{description}</Description>}
		</Content>
	);
};

skills.propTypes = {
	title: PropTypes.string.isRequired,
	rating: PropTypes.number.isRequired,
	description: PropTypes.string,
};

export default skills;