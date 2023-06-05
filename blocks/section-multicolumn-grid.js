import { InnerBlocks} from "@wordpress/block-editor";
import { registerBlockType } from "@wordpress/blocks";

registerBlockType("blocktheme/section-multicolumn-grid", {
    title: "Section Multicolumn Grid",
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
            <div className="div-block-61">
                <div className="w-layout-grid grid-13">
                    <InnerBlocks allowedBlocks={["blocktheme/child-column"]} />
                </div>
            </div>
        </>
    );
}

function SaveComponent() {
    return <InnerBlocks.Content />
}
