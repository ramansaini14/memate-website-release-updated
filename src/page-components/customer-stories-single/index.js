import CameraFix from "../../components/customer-stories-single/camera-fix";
import ProVinyl from "../../components/customer-stories-single/pro-vinyl";
import EliteLife from "../../components/customer-stories-single/elite-life";

import Layout from "../../layout";
import React from "react";
import { usePathname } from "next/navigation";
import BoatWizard from "../../components/customer-stories-single/boat-wizard";
import SortedMedia from "../../components/customer-stories-single/sorted-media";

const CustomerStoriesPageSingle = () => {
  const pathname = usePathname();
  return (
    <Layout>
      <div className="bgshadowwrapper">
        {pathname === "/customer-stories/camera-fix" && <CameraFix />}
        {pathname === "/customer-stories/pro-vinyl" && <ProVinyl />}
        {pathname === "/customer-stories/elite-life" && <EliteLife />}
        {pathname === "/customer-stories/boat-wizard" && (
          <BoatWizard />
        )}
        {pathname === "/customer-stories/sorted-media" && (
          <SortedMedia />
        )}
      </div>
    </Layout>
  );
};
export default CustomerStoriesPageSingle;
