import apiFetch from "@wordpress/api-fetch"
import { Button, PanelBody, PanelRow} from "@wordpress/components"
import { InspectorControls, MediaUpload, MediaUploadCheck, RichText} from "@wordpress/block-editor"
import { registerBlockType } from "@wordpress/blocks"
import { useEffect } from "@wordpress/element"

registerBlockType("blocktheme/grid-image", {
    title: "Grid Image",
    edit: EditComponent,
    supports: {
        align: ["full"],
    },
    attributes: {
        align: { type: "string", default: "full" },
        imgID: { type: "number" },
        imgURL: { type: "string", default: preloadImage.fallbackimage},
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

    function handelTextChange(x) {
        props.setAttributes({ text: x })
    }

    function handelTitleChange(x) {
        props.setAttributes({ title: x })
    }

    console.log(props.attributes.order)

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
            <div id="w-node-_370734ad-4f23-3a69-a85a-2733e5383ac9-495a224b" className="div-block-59"><img
                src={props.attributes.imgURL} loading="lazy" width="100" alt=""
                className="image-25"/>
            </div>
        </>
    );
}

function SaveComponent(props) {
    return <div id="w-node-_370734ad-4f23-3a69-a85a-2733e5383ac9-495a224b" className="div-block-59"><img
            src={props.attributes.imgURL} loading="lazy" width="800" height="500" alt=""
            className="image-25"/>
        </div>

}
