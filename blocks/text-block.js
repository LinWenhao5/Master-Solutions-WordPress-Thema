import { RichText, BlockControls } from "@wordpress/block-editor"
import { ToolbarGroup, ToolbarButton} from "@wordpress/components"
import { registerBlockType } from "@wordpress/blocks"

registerBlockType("blocktheme/text-block", {
    title: "Text Block",
    attributes: {
        text: {type: "string"},
        className: {type: "string", default:"text-block"}
    },
    edit: EditComponent,
    save: SaveComponent
})

function EditComponent(props) {
    function handelTextChange(x) {
        props.setAttributes({text: x});
    }

    return (
        <>
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton isPressed={props.attributes.className === "text-block"} onClick={()=>props.setAttributes({className: "text-block"})}>Regular</ToolbarButton>
                </ToolbarGroup>
                <ToolbarGroup>
                    <ToolbarButton isPressed={props.attributes.className === "text-block-29"} onClick={()=>props.setAttributes({className: "text-block-29"})}>text-block-29</ToolbarButton>
                </ToolbarGroup>
                <ToolbarGroup>
                    <ToolbarButton isPressed={props.attributes.className === "text-block-36"} onClick={()=>props.setAttributes({className: "text-block-36"})}>text-block-29</ToolbarButton>
                </ToolbarGroup>
            </BlockControls>
            <RichText
                tagName="div" className={props.attributes.className}
                value={props.attributes.text} onChange={handelTextChange}
            />
        </>
    )
}

function SaveComponent(props) {
    return (
        <RichText.Content tagName="div" className={props.attributes.className}  value={props.attributes.text} />
    )
}
