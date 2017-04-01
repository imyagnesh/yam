import styled from 'styled-components';

export const Root = styled.div`
    background: #fff;
    border: 1px solid #ddd;
    font-family: 'Georgia', serif;
    font-size: 14px;
    padding: 15px;
`;

export const EditorWrapper = styled.div`
    border-top: 1px solid #ddd;
    cursor: text;
    font-size: 16px;
    margin-top: 10px;
    & .public-DraftEditorPlaceholder-root {
        margin: 0 -15px -15px;
        padding: 15px;
    };
    & .public-DraftEditor-content {
        margin: 0 -15px -15px;
        padding: 15px;
        min-height: 100px;
    };
    & .RichEditor-blockquote {
        border-left: 5px solid #eee;
        color: #666;
        font-family: 'Hoefler Text', 'Georgia', serif;
        font-style: italic;
        margin: 16px 0;
        padding: 10px 20px;
    };
    & .RichEditor-code-block {
        font-family: "Inconsolata", "Menlo", "Consolas", monospace;
        font-size: 16px;
        padding: 2px;
    };
    & .RichEditor-strike-through {
        text-decoration: line-through;
    }
    & .public-DraftStyleDefault-pre {
        background-color: rgba(0, 0, 0, 0.05);
        font-family: 'Inconsolata', 'Menlo', 'Consolas', monospace;
        font-size: 16px;
        padding: 20px;
    }
    & .public-DraftEditorPlaceholder-root {
				color: #9197a3;
    		position: absolute;
    		z-index: 0;
    }
`;

export const EditorControls = styled.div`
    font-family: 'Helvetica', sans-serif;
    font-size: 14px;
    margin-bottom: 5px;
    user-select: none;
`;

export const EditorStledButton = styled.div`
    color: ${props => props.active ? '#5890ff' : '#999'};
    cursor: pointer;
    margin-right: 16px;
    padding: 2px 0;
    display: inline-block;
`;

export const Buttons = styled.div`
    margin-bottom: 10px;
`;

export const URLInputContainer = styled.div`
    margin-bottom: 10px;
`;

export const URLInput = styled.input`
    font-family: 'Georgia', sans-serif;
    padding: 3px;
    margin-right: 10px;
`;

export const ButtonStyle = styled.input`
    margin-top: 10px;
    text-align: center;
`;

export const LinkStyle = styled.a`
    color: #3b5998;
    text-decoration: underline;
`;