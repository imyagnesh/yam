import React, { Component } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';

import BoldIcon from 'material-ui/svg-icons/editor/format-bold';
import ItalicIcon from 'material-ui/svg-icons/editor/format-italic';
import UnderlinedIcon from 'material-ui/svg-icons/editor/format-underlined';
import StrikethroughIcon from 'material-ui/svg-icons/editor/format-strikethrough';
import BulletedListIcon from 'material-ui/svg-icons/editor/format-list-bulleted';
import NumberedListIcon from 'material-ui/svg-icons/editor/format-list-numbered';
import QuoteIcon from 'material-ui/svg-icons/editor/format-quote';
import CodeIcon from 'material-ui/svg-icons/action/code';

import getBlockAlignment from './getBlockAlignment';
import textAlignmentModifier from './textAlignmentModifier';
import { Root, EditorWrapper } from './style';
import SelectInput from './selectListInput';
import ButtonInput from './iconButtonInput';
import ChangeColor from './changeColor';

const menuItems = [
	{ label: 'Normal', style: 'unstyled' },
	{ label: 'H1', style: 'header-one' },
	{ label: 'H2', style: 'header-two' },
	{ label: 'H3', style: 'header-three' },
	{ label: 'H4', style: 'header-four' },
	{ label: 'H5', style: 'header-five' },
	{ label: 'H6', style: 'header-six' },
];

const textAlignItems = [
	{ label: 'Left', style: 'left' },
	{ label: 'Right', style: 'right' },
	{ label: 'Center', style: 'center' },
];

const customStyleMap = {
	red: {
		color: 'rgba(255, 0, 0, 1.0)',
	},
	orange: {
		color: 'rgba(255, 127, 0, 1.0)',
	},
	yellow: {
		color: 'rgba(180, 180, 0, 1.0)',
	},
};
// Custom overrides for "code" style.

class RichEditor extends Component {
	constructor(props) {
		super(props);
		this.state = { editorState: EditorState.createEmpty(), alignmentStyle: 'left' };
		this.focus = () => this.refs.editor.focus();
		this.onChange = (editorState) => this.setState({ editorState });
		this.onTab = (e) => this._onTab(e);
		this.getBlockStyle = this.getBlockStyle.bind(this);
		this.handleKeyCommand = (command) => this._handleKeyCommand(command);
		this.toggleTextAlignment = this.toggleTextAlignment.bind(this);
		this.toggleBlockType = (type) => this._toggleBlockType(type);
		this.toggleInlineStyle = (style) => this._toggleInlineStyle(style);
		this.toggleAdditionalStyle = (toggleAdditionalStyle) => this._toggleAdditionalStyle(toggleAdditionalStyle);
	}

	getBlockStyle(block) {
		let alignment = getBlockAlignment(block);
		if (!block.getText()) {
			let previousBlock = this.state.editorState.getCurrentContent().getBlockBefore(block.getKey());
			if (previousBlock) {
				alignment = getBlockAlignment(previousBlock);
			}
		}
		return `alignment--${alignment}`;
	}

	_handleKeyCommand(command) {
		const { editorState } = this.state;
		const newState = RichUtils.handleKeyCommand(editorState, command);
		if (newState) {
			this.onChange(newState);
			return true;
		}
		return false;
	}

	_onTab(e) {
		const maxDepth = 4;
		this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
	}

	_toggleBlockType(blockType) {
		this.onChange(
			RichUtils.toggleBlockType(
				this.state.editorState,
				blockType
			)
		);
	}

	_toggleInlineStyle(inlineStyle) {
		this.onChange(
			RichUtils.toggleInlineStyle(
				this.state.editorState,
				inlineStyle
			)
		);
	}

	toggleTextAlignment(style) {
		this.setState({ alignmentStyle: style });
		this.onChange(textAlignmentModifier(this.state.editorState, style, ["left", "center", "right"].filter((i) => i !== style)));
	}

	_toggleAdditionalStyle(toggleAdditionalStyle) {
		this.onChange(ChangeColor(this.state.editorState, toggleAdditionalStyle, customStyleMap));
	}

	render() {
		const { editorState } = this.state;
		const selection = editorState.getSelection();
		const blockType = editorState
			.getCurrentContent()
			.getBlockForKey(selection.getStartKey())
			.getType();
		const currentStyle = editorState.getCurrentInlineStyle();
		return (
			<Root>
				<div style={{ display: 'flex' }}>
					<SelectInput blockType={blockType} handleChange={this.toggleBlockType} menuItems={menuItems} />
					<ButtonInput active={currentStyle.has('BOLD')} onToggle={this.toggleInlineStyle} inlineStyle="BOLD" child={<BoldIcon />} />
					<ButtonInput active={currentStyle.has('ITALIC')} onToggle={this.toggleInlineStyle} inlineStyle="ITALIC" child={<ItalicIcon />} />
					<ButtonInput active={currentStyle.has('UNDERLINE')} onToggle={this.toggleInlineStyle} inlineStyle="UNDERLINE" child={<UnderlinedIcon />} />
					<ButtonInput active={currentStyle.has('STRIKETHROUGH')} onToggle={this.toggleInlineStyle} inlineStyle="STRIKETHROUGH" child={<StrikethroughIcon />} />
					<ButtonInput active={blockType === 'unordered-list-item'} onToggle={this.toggleBlockType} inlineStyle="unordered-list-item" child={<BulletedListIcon />} />
					<ButtonInput active={blockType === 'ordered-list-item'} onToggle={this.toggleBlockType} inlineStyle="ordered-list-item" child={<NumberedListIcon />} />
					<ButtonInput active={blockType === 'blockquote'} onToggle={this.toggleBlockType} inlineStyle="blockquote" child={<QuoteIcon />} />
					<ButtonInput active={blockType === 'code-block'} onToggle={this.toggleBlockType} inlineStyle="code-block" child={<CodeIcon />} />
					<SelectInput blockType={this.state.alignmentStyle} handleChange={this.toggleTextAlignment} menuItems={textAlignItems} />
				</div>

				<EditorWrapper onClick={this.focus}>
					<Editor
						blockStyleFn={this.getBlockStyle}
						customStyleMap={customStyleMap}
						editorState={editorState}
						handleKeyCommand={this.handleKeyCommand}
						onChange={this.onChange}
						textAlignment="center"
						placeholder="Enter some text..."
						ref="editor"
						spellCheck={true}
						onTab={this.onTab}
					/>
				</EditorWrapper>
			</Root>
		);
	}
}

RichEditor.propTypes = {

};

export default RichEditor;