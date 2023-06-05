import { InnerBlocks} from "@wordpress/block-editor";
import { registerBlockType } from "@wordpress/blocks";

registerBlockType("blocktheme/section-grid-large", {
    title: "Section Grid Large",
    edit: EditComponent,
    supports: {
        align: ["full"],
    },
    attributes: {

    },
    save: SaveComponent,
});

function EditComponent(props) {
    return (
        <>
            <div className="network-managment1 wf-section">
                <div className="w-layout-grid grid-14 eerste">
                    <InnerBlocks allowedBlocks={["blocktheme/grid-text", "blocktheme/grid-image"]} />
                </div>
            </div>
        </>
    );
}

function SaveComponent() {
    return <InnerBlocks.Content />
}
