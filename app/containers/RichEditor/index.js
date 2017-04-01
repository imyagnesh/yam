import React, { Component } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import { Root, EditorWrapper } from './style';
import BoldIcon from 'material-ui/svg-icons/editor/format-bold';

import SelectInput from './selectListInput';
import ButtonInput from './iconButtonInput';

const menuItems = [
	{ label: 'Normal', style: 'unstyled' },
	{ label: 'H1', style: 'header-one' },
	{ label: 'H2', style: 'header-two' },
	{ label: 'H3', style: 'header-three' },
	{ label: 'H4', style: 'header-four' },
	{ label: 'H5', style: 'header-five' },
	{ label: 'H6', style: 'header-six' },
];

// Custom overrides for "code" style.
function getBlockStyle(block) {
	switch (block.getType()) {
		case 'blockquote': return 'RichEditor-blockquote';
		default: return null;
	}
}

class RichEditor extends Component {
	constructor(props) {
		super(props);
		this.state = { editorState: EditorState.createEmpty() };
		this.focus = () => this.refs.editor.focus();
		this.onChange = (editorState) => this.setState({ editorState });
		this.onTab = (e) => this._onTab(e);
		this.handleKeyCommand = (command) => this._handleKeyCommand(command);
		this.toggleBlockType = (type) => this._toggleBlockType(type);
		this.toggleInlineStyle = (style) => this._toggleInlineStyle(style);
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
				<SelectInput blockType={blockType} handleChange={this.toggleBlockType} menuItems={menuItems} />
				<ButtonInput currentStyle={currentStyle} onToggle={this.toggleInlineStyle} inlineStyle="BOLD" child={<BoldIcon />} />
				<EditorWrapper onClick={this.focus}>
					<Editor
						blockStyleFn={getBlockStyle}
						editorState={editorState}
						handleKeyCommand={this.handleKeyCommand}
						onChange={this.onChange}
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