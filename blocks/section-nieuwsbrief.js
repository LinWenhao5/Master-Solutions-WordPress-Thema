import { InnerBlocks, BlockControls, RichText} from "@wordpress/block-editor"
import { registerBlockType } from "@wordpress/blocks"

registerBlockType("blocktheme/section-nieuwsbrief", {
    title: "Section Nieuwsbrief",
    edit: EditComponent,
    supports: {
        align: ["full"],
    },
    attributes: {
        text: {type: "string"}
    },
    save: SaveComponent,
});

function EditComponent(props) {

    function handelTextChange(x) {
        props.setAttributes({text: x})
    }

    return (
        <>
            <div className="nieuwsbrief wf-section">
                <div bind="9a628083-5ce9-3cff-ba8a-346e0a414708" className="footer-form-two w-form">
                    <RichText
                        tagName="h1" className="heading-3"
                        value={props.attributes.text} onChange={handelTextChange}
                    />
                    <form id="wf-form-Master-Solutions-Nieuwsbrief" name="wf-form-Master-Solutions-Nieuwsbrief"
                          data-name="Master Solutions Nieuwsbrief" method="get" className="footer-form-container-two">
                        <div className="footer-form-block-two">
                            <input type="email" className="footer-form-input w-input"
                              maxLength="256" name="Footer-Email-Two"
                              data-name="Footer Email Two"
                              aria-label="Enter your email"
                              placeholder="Emailadres" id="Footer-Email-Two"
                              required=""/>
                            <input type="submit" value="AANMELDEN"
                             data-wait="Please wait..."
                             className="button-primary footer-form-button w-button"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

function SaveComponent(props) {
    return props.attributes.text
}
