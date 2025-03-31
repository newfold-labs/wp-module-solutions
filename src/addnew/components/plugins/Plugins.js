import {Commerce} from "./plans/Commerce";
import {Creator} from "./plans/Creator";

export const Plugins = ( {plan} ) => {
    return (
        <>
            { !!plan && 'WP_SOLUTION_COMMERCE' === plan.sku && <Commerce plan={plan}/>  }
            { !!plan && 'WP_SOLUTION_CREATOR' === plan.sku && <Creator plan={plan}/>  }
        </>
    );
};
