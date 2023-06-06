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
    return(
        <div id="w-node-_370734ad-4f23-3a69-a85a-2733e5383ac9-495a224b" className="div-block-59">
            <img src={`${props.attributes.imgURL}`} loading="lazy" width="668"
                 id="w-node-f58acfb4-62dd-8cc7-b977-7ee2f46348f6-495a224b"
                 srcSet={`${props.attributes.imgURL} 500w, ${props.attributes.imgURL} 800w, ${props.attributes.imgURL} 1080w, ${props.attributes.imgURL} 1500w`}
                 sizes="(max-width: 991px) 100vw, (max-width: 1279px) 39vw, (max-width: 1439px) 40vw, 560px" alt=""
                 className="image-23"/>
        </div>
    )

}
