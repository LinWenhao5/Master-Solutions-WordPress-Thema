import apiFetch from "@wordpress/api-fetch"
import { Button, PanelBody, PanelRow, ToolbarGroup, ToolbarButton, Popover } from "@wordpress/components"
import { InnerBlocks, InspectorControls, RichText, MediaUpload, MediaUploadCheck, BlockControls,
    __experimentalLinkControl as LinkControl,} from "@wordpress/block-editor";
import { registerBlockType } from "@wordpress/blocks";
import { useEffect } from "@wordpress/element"
import { link } from "@wordpress/icons"
import { useState } from "@wordpress/element"

registerBlockType("blocktheme/top-grid-large", {
    title: "Top Grid Large",
    edit: EditComponent,
    supports: {
        align: ["full"],
    },
    attributes: {
        title: {type: "string", default:"De inspectie app"},
        subtitle: {type: "string", default:"Columbo"},
        text: {
            type: "string",
            default: "Lorem ipsum dolor sit amet consectetur. Volutpat lacus praesent semper tristique. Volutpat odio ultrices volutpat nullam diam massa vitae tincidunt neque. Nulla diam suspendisse venenatis rhoncus. Porttitor faucibus phasellus et lobortis viverra nunc placerat fringilla vivamus.Suspendisse vitae id aliquam risus mauris. In porttitor ac neque"
        },
        buttonText: {type: "string", default: "JA, IK HEB INTERESSE"},
        imgID: { type: "number" },
        imgURL: { type: "string" ,default: preloadImage.fallbackimage},
        linkObject: {type: "object", default: {url: ""} },
        className: {type: "string", default: "div-block-50"}
    },
    save: SaveComponent,
});

function EditComponent(props) {
    // image
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

    // url
    const [isLinkPickerVisible, setIsLinkPickerVisible] = useState(false)

    function buttonHandler(props) {
        setIsLinkPickerVisible(prev => !prev);
    }

    function handleLinkChange(newLink) {
        props.setAttributes({linkObject: newLink});
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
                    <ToolbarButton onClick={buttonHandler} icon={link} />
                </ToolbarGroup>
                <ToolbarGroup>
                    <ToolbarButton isPressed={props.attributes.className === "div-block-50"} onClick={()=>props.setAttributes({className: "div-block-50"})}>Blue</ToolbarButton>
                </ToolbarGroup>
                <ToolbarGroup>
                    <ToolbarButton isPressed={props.attributes.className === "div-block-50-orange"} onClick={()=>props.setAttributes({className: "div-block-50-orange"})}>Orange</ToolbarButton>
                </ToolbarGroup>
            </BlockControls>
            <div className="div-block-49">
                <img src={props.attributes.imgURL} loading="lazy"
                   sizes="(max-width: 860px) 100vw, (max-width: 991px) 860px, (max-width: 1279px) 51vw, (max-width: 1919px) 52vw, 860px"
                   id="w-node-_6b025275-0e53-13d9-0ab8-460680e1d5a2-e3abbb81"
                   srcSet={`${props.attributes.imgURL} 500w, ${props.attributes.imgURL} 800w, ${props.attributes.imgURL} 860w`}
                   alt="" className="image-20" />
                <div id="w-node-_04c3b03c-e56b-5f78-1063-a2e351498186-e3abbb81" className={props.attributes.className}>
                    <RichText
                        tagName="h1" className="heading-22"
                        value={props.attributes.title} onChange={(x)=>props.setAttributes({title: x})}
                    />
                    <RichText
                        tagName="h1" className="heading-22"
                        value={props.attributes.subtitle} onChange={(x)=>props.setAttributes({subtitle: x})}
                    />
                    <RichText
                        tagName="div" className="text-block-32"
                        value={props.attributes.text} onChange={(x)=>props.setAttributes({text: x})}
                    />
                    <RichText allowedFormats={[]}
                              tagName="a" className="button-21 w-button" value={props.attributes.buttonText} onChange={(x)=>props.setAttributes({buttonText: x})}
                    />
                </div>
            </div>
            {isLinkPickerVisible && (
                <Popover position="middle center">
                    <LinkControl setttings={[]} value={props.attributes.linkObject} onChange={handleLinkChange} />
                    <button variant="primary" onClick={() => setIsLinkPickerVisible(false)} style={{ display:"block", width: "100%" }}>
                        Confirm Link
                    </button>
                </Popover>
            )}
        </>
    );
}

function SaveComponent(props) {
    return props.attributes
}
