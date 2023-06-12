import { ToolbarGroup, ToolbarButton, Popover} from "@wordpress/components"
import {
    RichText,
    BlockControls,
    __experimentalLinkControl as LinkControl,
} from "@wordpress/block-editor"
import { registerBlockType } from "@wordpress/blocks"
import { link } from "@wordpress/icons"
import { useState } from "@wordpress/element"
import { RawHTML } from '@wordpress/element';

registerBlockType("blocktheme/grid-text", {
    title: "Grid Text",
    edit: EditComponent,
    supports: {
        align: ["full"],
    },
    attributes: {
        heading: {type: "string", default: "Lorem ipsum"},
        linkObject: {type: "object", default: {url: ""} },
        listContent: {type: "string", default: "Lorem ipsum"},
        buttonText: {type: "string", default: "Meer over Security Bridge"},
        buttonColor: {type: "string", default: "button-22 w-button"}
    },
    save: SaveComponent,
});

function EditComponent(props) {
    const [isLinkPickerVisible, setIsLinkPickerVisible] = useState(false)

    function buttonHandler(props) {
        setIsLinkPickerVisible(prev => !prev);
    }

    function handleLinkChange(newLink) {
        props.setAttributes({linkObject: newLink});
    }
    return (
        <>
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton onClick={buttonHandler} icon={link} />
                </ToolbarGroup>
                <ToolbarGroup>
                    <ToolbarButton isPressed={props.attributes.buttonColor === "button-22 w-button"} onClick={()=>props.setAttributes({buttonColor: "button-22 w-button"})}>Orange</ToolbarButton>
                </ToolbarGroup>
                <ToolbarGroup>
                    <ToolbarButton isPressed={props.attributes.buttonColor === "button-7 product w-button"} onClick={()=>props.setAttributes({buttonColor: "button-7 product w-button"})}>Blue</ToolbarButton>
                </ToolbarGroup>
            </BlockControls>
            <div id="w-node-_370734ad-4f23-3a69-a85a-2733e5383acb-495a224b" className="div-block-60">

                <RichText
                    tagName="h1" className="heading-26"
                    value={props.attributes.heading} onChange={(x)=>props.setAttributes({ heading: x})}
                />
                <RichText
                    tagName="p"
                    value={props.attributes.listContent} onChange={(x)=>props.setAttributes({ listContent: x})}
                />
                <RichText allowedFormats={[]}
                          tagName="a" className={props.attributes.buttonColor} value={props.attributes.buttonText} onChange={(x)=>props.setAttributes({ buttonText: x})}
                />
            </div>
            {isLinkPickerVisible && (
                <Popover position="middle center">
                    <LinkControl setttings={[]} value={props.attributes.linkObject} onChange={handleLinkChange} />
                    <button variant="primary" onClick={() => setIsLinkPickerVisible(false)} style={{ display:"block", width: "100%" }}>
                        Confirm Link
                    </button>
                </Popover>
            )}
        </>
    );
}

function SaveComponent(props) {
    const { heading, listContent, linkObject, buttonColor, buttonText } = props.attributes;
    const htmlString = `
    <h1 class="heading-26">${heading}</h1>
    <p>${listContent}</p>
    <a bind="370734ad-4f23-3a69-a85a-2733e5383ae7" href="${linkObject.url}" class="${buttonColor}">${buttonText}</a>
  `;
    return (
        <div
            id="w-node-_370734ad-4f23-3a69-a85a-2733e5383acb-495a224b"
            className="div-block-60"
        >
            <RawHTML>{htmlString}</RawHTML>
        </div>
    );
}
