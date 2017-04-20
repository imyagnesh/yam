
import 'draft-js-inline-toolbar-plugin/lib/plugin.css';
import 'draft-js-side-toolbar-plugin/lib/plugin.css';

import React, { Component } from 'react';
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';

import createSideToolbarPlugin from 'draft-js-side-toolbar-plugin';
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin';


import { Root } from './editorStyles';

const sideToolbarPlugin = createSideToolbarPlugin();
const { SideToolbar } = sideToolbarPlugin;

const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;

const plugins = [inlineToolbarPlugin, sideToolbarPlugin];

class RichEditor extends Component {
	constructor(props) {
		super(props);
		this.state = { editorState: createEditorStateWithText('') };
		this.focus = () => this.editor.focus();
		this.onChange = (editorState) => this.setState({ editorState });
	}

	render() {
		return (
			<Root onClick={this.focus}>
				<Editor
					editorState={this.state.editorState}
					onChange={this.onChange}
					plugins={plugins}
					ref={(element) => { this.editor = element; }}
				/>
				<InlineToolbar />
				<SideToolbar />
			</Root>
		);
	}
}

RichEditor.propTypes = {

};

export default RichEditor;