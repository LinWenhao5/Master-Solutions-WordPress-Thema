import apiFetch from "@wordpress/api-fetch"
import { Button, PanelBody, PanelRow } from "@wordpress/components"
import { InnerBlocks, InspectorControls, MediaUpload, MediaUploadCheck} from "@wordpress/block-editor";
import { registerBlockType } from "@wordpress/blocks";
import { useEffect } from "@wordpress/element"

registerBlockType("blocktheme/text-area", {
    title: "Text Area",
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
        <div className="w-container">
            <InnerBlocks allowedBlocks={["blocktheme/div-block", "blocktheme/heading"]} />
        </div>
        </>
    );
}

function SaveComponent() {
    return <InnerBlocks.Content />
}
