import apiFetch from "@wordpress/api-fetch"
import { Button, PanelBody, PanelRow } from "@wordpress/components"
import { InnerBlocks, InspectorControls, MediaUpload, MediaUploadCheck} from "@wordpress/block-editor";
import { registerBlockType } from "@wordpress/blocks";
import { useEffect } from "@wordpress/element"

registerBlockType("blocktheme/hero-home", {
    title: "Hero Home",
    edit: EditComponent,
    supports: {
        align: ["full"],
    },
    attributes: {
        imgID: { type: "number" },
        imgURL: { type: "string", default: preloadImage.fallbackimage}
    },
    save: SaveComponent,
});

function EditComponent(props) {
    useEffect(
        function () {
            if (props.attributes.imgID) {
                async function go() {
                    const response = await apiFetch({
                        path: `/wp/v2/media/${props.attributes.imgID}`,
                        method: "GET"
                    })
                    props.setAttributes({imgURL : response.source_url})
                }
                go()
            }
        },
        [props.attributes.imgID]
    )

    function onFileSelect(x) {
        props.setAttributes({ imgID: x.id })
    }

    return (
        <>
            <InspectorControls>
                <PanelBody title="Background" initialOpen={true}>
                    <PanelRow>
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={onFileSelect}
                                value={props.attributes.imgID}
                                render={({ open }) => {
                                    return <Button onClick={open}>Choose Image</Button>
                                }}
                            />
                        </MediaUploadCheck>
                    </PanelRow>
                </PanelBody>
            </InspectorControls>
            <div className="hero-foto wf-section">
                <div className="div-block-45">
                    <img
                        src= {props.attributes.imgURL}
                        loading="lazy"
                        alt=""
                        className="image-19"
                    />
                </div>
            </div>
            <div className="hero-tekst wf-section">
                <div className="container-2 w-container">
                    <InnerBlocks allowedBlocks={["blocktheme/heading", "blocktheme/text-block"]} />
                </div>
            </div>
        </>
    );
}

function SaveComponent() {
    return <InnerBlocks.Content />
}
