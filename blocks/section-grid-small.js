import apiFetch from "@wordpress/api-fetch"
import { Button, PanelBody, PanelRow, ToolbarGroup, ToolbarButton } from "@wordpress/components"
import { InnerBlocks, InspectorControls, RichText, MediaUpload, MediaUploadCheck, BlockControls } from "@wordpress/block-editor";
import { registerBlockType } from "@wordpress/blocks";
import { useEffect } from "@wordpress/element"

registerBlockType("blocktheme/section-grid-small", {
    title: "Section Grid Small",
    edit: EditComponent,
    supports: {
        align: ["full"],
    },
    attributes: {
        text: {
            type: "string",
            default: ""
        },
        className: {type: "string", default: "grid-10"},
        imgID: { type: "number" },
        imgURL: { type: "string" ,default: preloadImage.fallbackimage}
    },
    save: SaveComponent,
});

function EditComponent(props) {
    function handelTextChange(x) {
        props.setAttributes({text: x})
    }

    useEffect(
        function () {
            if (props.attributes.imgID) {
                async function go() {
                    const response = await apiFetch({
                        path: `/wp/v2/media/${props.attributes.imgID}`,
                        method: "GET"
                    })
                    props.setAttributes({ imgURL: response.source_url })
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

            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton isPressed={props.attributes.className === "grid-10"} onClick={()=>props.setAttributes({className: "grid-10"})}>Orange</ToolbarButton>
                </ToolbarGroup>
                <ToolbarGroup>
                    <ToolbarButton isPressed={props.attributes.className === "grid-10-blue"} onClick={()=>props.setAttributes({className: "grid-10-blue"})}>Blue</ToolbarButton>
                </ToolbarGroup>
            </BlockControls>

            <div className="section-16 wf-section">
                <div className={`w-layout-grid ${props.attributes.className}`}>
                    <RichText
                        tagName="div" className="text-block-37"
                        value={props.attributes.text} onChange={handelTextChange}
                    />
                    <img src={props.attributes.imgURL} loading="lazy"
                         id="w-node-_993d318d-7a60-b2cd-f7ed-b9699b551f0a-495a224b" alt="" className="image-22" />
                </div>
            </div>
        </>
    );
}

function SaveComponent(props) {
    return props.attributes
}
