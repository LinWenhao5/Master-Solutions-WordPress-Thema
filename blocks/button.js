import { ToolbarGroup, ToolbarButton, Popover} from "@wordpress/components"
import {
    RichText,
    BlockControls,
    __experimentalLinkControl as LinkControl,
} from "@wordpress/block-editor"
import { registerBlockType } from "@wordpress/blocks"
import { link } from "@wordpress/icons"
import { useState } from "@wordpress/element"

registerBlockType("blocktheme/button", {
    title: "button",
    attributes: {
        text: {type: "string"},
        linkObject: {type: "object", default: {url: ""} },
        position: {type: "string", default: "button-17"}
    },
    edit: EditComponent,
    save: SaveComponent
})

function EditComponent(props) {
    const [isLinkPickerVisible, setIsLinkPickerVisible] = useState(false)
    function handelTextChange(x) {
        props.setAttributes({text: x});
    }

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
                    <ToolbarButton isPressed={props.attributes.position === "button-17"} onClick={()=>props.setAttributes({position: "button-17"})}>buttom left</ToolbarButton>
                </ToolbarGroup>
                <ToolbarGroup>
                    <ToolbarButton isPressed={props.attributes.position === "button-18"} onClick={()=>props.setAttributes({position: "button-18"})}>button right</ToolbarButton>
                </ToolbarGroup>
            </BlockControls>
            <RichText allowedFormats={[]}
                      tagName="a" className={`${props.attributes.position} w-button`} value={props.attributes.text} onChange={handelTextChange} />
            {isLinkPickerVisible && (
                <Popover position="middle center">
                    <LinkControl setttings={[]} value={props.attributes.linkObject} onChange={handleLinkChange} />
                    <button variant="primary" onClick={() => setIsLinkPickerVisible(false)} style={{ display:"block", width: "100%" }}>
                        Confirm Link
                    </button>
                </Popover>
            )}
        </>
    )
}

function SaveComponent(props) {
    return <a href={props.attributes.linkObject.url} className={`${props.attributes.position} w-button`}> {props.attributes.text}</a>
}
