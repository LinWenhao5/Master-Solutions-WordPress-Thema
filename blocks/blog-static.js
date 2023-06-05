import apiFetch from "@wordpress/api-fetch"
import { Button, PanelBody, PanelRow, ToolbarGroup, ToolbarButton, Popover } from "@wordpress/components"
import { InnerBlocks, InspectorControls, MediaUpload, MediaUploadCheck, RichText, BlockControls,  __experimentalLinkControl as LinkControl,} from "@wordpress/block-editor";
import { registerBlockType } from "@wordpress/blocks";
import {useEffect, useState} from "@wordpress/element"
import { link } from "@wordpress/icons"

registerBlockType("blocktheme/blog-static", {
    title: "blog static",
    edit: EditComponent,
    save: SaveComponent,
    attributes: {
        title : {type: "string"},
        text : {type: "string"},
        button : {type: "string"},
        buttonColor: {type: "string", default: ""},
        imgID: { type: "number" },
        imgURL: { type: "string", default: preloadImage.fallbackimage},
        linkObject: {type: "object", default: {url: ""} }
    }
});

function EditComponent(props) {
    const [isLinkPickerVisible, setIsLinkPickerVisible] = useState(false)

    function buttonHandler(props) {
        setIsLinkPickerVisible(prev => !prev);
    }

    function handleLinkChange(newLink) {
        props.setAttributes({linkObject: newLink});
    }

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

    function handelTitleChange(x) {
        props.setAttributes({title: x});
    }

    function handelTextChange(x) {
        props.setAttributes({text: x});
    }

    function handelButtonTextChange(x) {
        props.setAttributes({button: x})
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
                    <ToolbarButton isPressed={props.attributes.buttonColor === ""} onClick={()=>props.setAttributes({buttonColor: ""})}>Color Orange</ToolbarButton>
                </ToolbarGroup>
                <ToolbarGroup>
                    <ToolbarButton isPressed={props.attributes.buttonColor === "software"} onClick={()=>props.setAttributes({buttonColor: "software"})}>Color purple</ToolbarButton>
                </ToolbarGroup>
            </BlockControls>

            <div className="softwareinformatie homepagina">
                <a className="rl_blog33_image-link w-inline-block">
                    {/*href=""*/}
                    <div className="rl_blog33_image-wrapper">
                    <img height="100" loading="lazy" src={props.attributes.imgURL}
                      sizes="(max-width: 479px) 100vw, (max-width: 767px) 47vw, (max-width: 991px) 48vw, 31vw"
                      srcSet= {`${props.attributes.imgURL} 500w, ${props.attributes.imgURL} 800w, ${props.attributes.imgURL} 1080w, ${props.attributes.imgURL} 1500w`}
                      alt="" className="rl_blog33_image" />
                    </div>
                </a>
                <a className="rl_blog3_title-link w-inline-block">
                    {/*href=""*/}
                    <RichText
                        tagName="h3" className="rl-heading-style-h5"
                        value={props.attributes.title} onChange={handelTitleChange}
                    />
                </a>
                <div className="rl_blog33_spacing-block-6"></div>
                <div className="div-block-2">
                    <RichText
                        tagName="div" className="rl-text-style-regular"
                        value={props.attributes.text} onChange={handelTextChange}
                    />
                </div>
                <div className="rl_blog33_spacing-block-7">
                    <div className="section-5 wf-section">
                        <RichText
                            allowedFormats={[]}
                            tagName="a" className={`button-4 ${props.attributes.buttonColor} w-button`}
                            value={props.attributes.button} onChange={handelButtonTextChange}
                        />
                        {isLinkPickerVisible && (
                            <Popover position="middle center">
                                <LinkControl setttings={[]} value={props.attributes.linkObject} onChange={handleLinkChange} />
                                <button variant="primary" onClick={() => setIsLinkPickerVisible(false)} style={{ display:"block", width: "100%" }}>
                                    Confirm Link
                                </button>
                            </Popover>
                        )}
                    </div>
                </div>
            </div>

        </>
    );
}

function SaveComponent(props) {
    return <div className="softwareinformatie homepagina">
        <a href={props.attributes.linkObject.url} className="rl_blog33_image-link w-inline-block">
            <div className="rl_blog33_image-wrapper">
                <img height="100" loading="lazy"
                     src={props.attributes.imgURL}
                     sizes="(max-width: 479px) 100vw, (max-width: 767px) 47vw, (max-width: 991px) 48vw, 31vw"
                     srcSet={`${props.attributes.imgURL} 500w, ${props.attributes.imgURL} 800w, ${props.attributes.imgURL} 1080w, ${props.attributes.imgURL} 1500w`}
                     alt="" className="rl_blog33_image" />
            </div>
        </a>
        <a href={props.attributes.linkObject.url} className="rl_blog3_title-link w-inline-block">
            <h3 className="rl-heading-style-h5">{props.attributes.title}</h3>
        </a>
        <div className="rl_blog33_spacing-block-6"></div>
        <div className="div-block-2">
            <div className="rl-text-style-regular">{props.attributes.text}</div>
        </div>
        <div className="rl_blog33_spacing-block-7">
            <div className="section-5 wf-section">
                <a bind="88e09e55-c065-7e58-844a-69aa180e4b05" href={props.attributes.linkObject.url}
                   className={`button-4 ${props.attributes.buttonColor} w-button`}>{props.attributes.button}</a>
            </div>
        </div>
    </div>
}
