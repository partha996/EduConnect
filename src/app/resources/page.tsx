import { PageHeader } from "@/components/layout/PageHeader";
import { ResourceCard } from "@/components/resources/ResourceCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { resources } from "@/lib/mock-data";

const categories = ["All", "Physics", "Chemistry", "Biology", "Mathematics", "History"];

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        title="Resource Library"
        description="Your gateway to curated knowledge. Download eBooks, watch videos, and more."
      />
      <div className="flex-1 overflow-auto p-4 md:p-6">
        <Tabs defaultValue="All" className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 mb-4">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
            ))}
          </TabsList>
          
          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {resources
                  .filter((res) => category === "All" || res.category === category)
                  .map((resource) => (
                    <ResourceCard key={resource.id} resource={resource} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </>
  );
}
