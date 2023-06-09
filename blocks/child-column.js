import apiFetch from "@wordpress/api-fetch"
import { Button, PanelBody, PanelRow, ToolbarGroup, ToolbarButton } from "@wordpress/components"
import { InspectorControls, MediaUpload, MediaUploadCheck, RichText, BlockControls } from "@wordpress/block-editor"
import { registerBlockType } from "@wordpress/blocks"
import { useEffect } from "@wordpress/element"

registerBlockType("blocktheme/child-column", {
    title: "Child Column",
    edit: EditComponent,
    supports: {
        align: ["full"],
    },
    attributes: {
        align: { type: "string", default: "full" },
        imgID: { type: "number" },
        imgURL: { type: "string", default: preloadImage.fallbackimage},
        title : {type: "string", default:"Network"},
        text : {
            type: "string",
            default: "Je netwerk is de ruggengraat van je bedrijf. Grote kans dat als daar iets mis gaat, je bedrijf plat ligt. Daarom wil je je netwerk door vakkundige, ervaren handen laten beheren."
        },
        className: {type: "string", default:"div-block-56"}
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

            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton isPressed={props.attributes.className === "div-block-56"} onClick={()=>props.setAttributes({className: "div-block-55"})}>light yellow</ToolbarButton>
                </ToolbarGroup>
                <ToolbarGroup>
                    <ToolbarButton isPressed={props.attributes.className === "div-block-56-light-blue"} onClick={()=>props.setAttributes({className: "div-block-56-light-blue"})}>light blue</ToolbarButton>
                </ToolbarGroup>
            </BlockControls>

            <div id="w-node-_7b04c8fa-b584-060f-7234-85317b2096eb-495a224b" className={props.attributes.className}>
                <RichText
                    tagName="h1" className="heading-24"
                    value={props.attributes.title} onChange={handelTitleChange}
                />
                <RichText
                    tagName="div" className="text-block-38"
                    value={props.attributes.text} onChange={handelTextChange}
                />
                <div className="div-block-58">
                    <img src={props.attributes.imgURL} loading="lazy" width="52"
                       sizes="(max-width: 1279px) 52px, (max-width: 1439px) 4vw, 52px"
                       srcSet={`${props.attributes.imgURL} 500w, ${props.attributes.imgURL} 512w`}
                       alt=""
                    />
                </div>
            </div>
        </>
    );
}

function SaveComponent(props) {
    return(
        <div id="w-node-_7b04c8fa-b584-060f-7234-85317b2096eb-495a224b" className={props.attributes.className}>
            <h1 className="heading-24">{props.attributes.title}</h1>
            <div className="text-block-38">{props.attributes.text}</div>
            <div className="div-block-58">
                <img src={props.attributes.imgURL} loading="lazy" width="52"
                     sizes="(max-width: 1279px) 52px, (max-width: 1439px) 4vw, 52px"
                     srcSet={`${props.attributes.imgURL} 500w, ${props.attributes.imgURL} 512w`}
                     alt=""
                />
            </div>
        </div>
    )

}
