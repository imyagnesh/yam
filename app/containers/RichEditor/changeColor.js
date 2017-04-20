import { EditorState, RichUtils, Modifier } from 'draft-js';

export default function (editorState, toggleAdditionalStyle, customStyleMap) {
	const selection = editorState.getSelection();

	// Let's just allow one color at a time. Turn off all active colors.
	const nextContentState = Object.keys(customStyleMap)
		.reduce((contentState, color) => {
			return Modifier.removeInlineStyle(contentState, selection, color);
		}, editorState.getCurrentContent());

	let nextEditorState = EditorState.push(
		editorState,
		nextContentState,
		'change-inline-style'
	);

	const currentStyle = editorState.getCurrentInlineStyle();

	// Unset style override for current color.
	if (selection.isCollapsed()) {
		nextEditorState = currentStyle.reduce((state, color) => {
			return RichUtils.toggleInlineStyle(state, color);
		}, nextEditorState);
	}

	// If the color is being toggled on, apply it.
	if (!currentStyle.has(toggleAdditionalStyle)) {
		nextEditorState = RichUtils.toggleInlineStyle(
			nextEditorState,
			toggleAdditionalStyle
		);
	}
	return nextEditorState;
}