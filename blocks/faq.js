import { ToolbarGroup, ToolbarButton, Popover} from "@wordpress/components"
import { InnerBlocks, BlockControls,} from "@wordpress/block-editor";
import { registerBlockType } from "@wordpress/blocks";

registerBlockType("blocktheme/faq", {
    title: "FAQ",
    edit: EditComponent,
    supports: {
        align: ["full"],
    },
    attributes: {
        color: {type: "string", default: ""},
    },
    save: SaveComponent,
});

function EditComponent(props) {

    return (
        <>
            <ToolbarGroup>
                <ToolbarButton isPressed={props.attributes.color === "diensten"} onClick={()=>props.setAttributes({color: "diensten"})}>Color Orange</ToolbarButton>
            </ToolbarGroup>
            <ToolbarGroup>
                <ToolbarButton isPressed={props.attributes.color === ""} onClick={()=>props.setAttributes({color: ""})}>Color Blue</ToolbarButton>
            </ToolbarGroup>
            <div className={`vragen-balk ${props.attributes.color} wf-section`}>
                <div className="div-block-38">
                    <InnerBlocks allowedBlocks={["blocktheme/button", "blocktheme/text-block"]} />
                </div>
            </div>
        </>
    )
}

function SaveComponent() {
    return <InnerBlocks.Content />
}
