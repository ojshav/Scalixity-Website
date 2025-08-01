import { Link } from "lucide-react";
import { NavigationMenuLink } from "./ui/navigation-menu";

<>
  <NavigationMenuLink asChild>
    <Link
      href="/services/generative-ai/generative-ai-development"
      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
    >
      <div className="text-sm font-medium leading-none">Generative AI Development</div>
      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
        Build custom generative AI solutions for your business
      </p>
    </Link>
  </NavigationMenuLink>

  <NavigationMenuLink asChild>
    <Link
      href="/campaign"
      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
    >
      <div className="text-sm font-medium leading-none">UI/UX Competition</div>
      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
        Participate in Scalixity&rsquo;s UI/UX design competition
      </p>
    </Link>
  </NavigationMenuLink>
</>

