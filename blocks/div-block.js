import { RichText, BlockControls } from "@wordpress/block-editor"
import { ToolbarGroup, ToolbarButton} from "@wordpress/components"
import { registerBlockType } from "@wordpress/blocks"

registerBlockType("blocktheme/div-block", {
    title: "Div Block",
    attributes: {
        text: {type: "string"},
        className: {type: "string", default:"div-block-51"}
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
                    <ToolbarButton isPressed={props.attributes.className === "div-block-51"} onClick={()=>props.setAttributes({className: "div-block-51"})}>Regular</ToolbarButton>
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
