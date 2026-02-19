'use client';

import { useMemo, useState } from 'react';
import NavBar from '@/components/Links/NavBar';
import Footer from '@/components/Links/Footer';
import ButtonDisplay from '@/components/ButtonDisplay';
import { programs } from '@/data/programs';

export default function ProgramsPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<'all' | string>('all');
  const [country, setCountry] = useState<'all' | string>('all');
  const [maxFee, setMaxFee] = useState<number | null>(null);
  const [includeVaries, setIncludeVaries] = useState(true);

  const categories = useMemo(
    () => [
      { id: 'all', label: 'All Programs' },
      { id: 'mbbs', label: 'MBBS' },
      { id: 'nursing', label: 'Nursing' },
      { id: 'medical', label: 'Medical Courses' },
      { id: 'other', label: 'Other Courses' },
    ],
    []
  );

  const countries = useMemo(() => {
    const unique = Array.from(new Set(programs.map((p) => p.country))).sort();
    return [{ id: 'all', label: 'All Countries' }, ...unique.map((c) => ({ id: c, label: c }))];
  }, []);

  const feeRange = useMemo(() => {
    const fees = programs.map((p) => p.tuitionPerYearUsd).filter((v): v is number => typeof v === 'number');
    const min = fees.length ? Math.min(...fees) : 0;
    const max = fees.length ? Math.max(...fees) : 0;
    return { min, max };
  }, []);

  const effectiveMaxFee = maxFee ?? feeRange.max;

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();

    return programs.filter((p) => {
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.university.toLowerCase().includes(q) ||
        p.country.toLowerCase().includes(q);

      const matchesCategory = category === 'all' || p.category === category;
      const matchesCountry = country === 'all' || p.country === country;

      const fee = p.tuitionPerYearUsd;
      const matchesFee =
        fee === null ? includeVaries : fee <= effectiveMaxFee;

      return matchesSearch && matchesCategory && matchesCountry && matchesFee;
    });
  }, [search, category, country, includeVaries, effectiveMaxFee]);

  return (
    <div className="font-[family-name:var(--font-montserrat)] relative bg-white">
      <NavBar />

      <section className="section-padding bg-gradient-to-br from-[#F8FAFC] to-white">
        <div className="container">
          <div className="space-y-4 text-center mb-10">
            <h1 className="heading-lg text-[#002448]">
              Explore <span className="gradient-text">Programs</span>
            </h1>
            <p className="text-body max-w-2xl mx-auto">
              Use filters to quickly find the right program by country, category, and fees.
            </p>
          </div>

          {/* Advanced Filters */}
          <div className="card-premium p-6 mb-10">
            <div className="grid lg:grid-cols-12 gap-4 items-end">
              <div className="lg:col-span-4">
                <label className="text-sm font-medium text-[#64748B]">Search</label>
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search university, country, program..."
                  className="mt-2 w-full rounded-xl border border-[#E2E8F0] px-4 py-3 focus:outline-none focus:ring-4 focus:ring-[#FF9257]/20"
                />
              </div>

              <div className="lg:col-span-3">
                <label className="text-sm font-medium text-[#64748B]">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-[#E2E8F0] px-4 py-3 bg-white focus:outline-none focus:ring-4 focus:ring-[#FF9257]/20"
                >
                  {categories.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="lg:col-span-3">
                <label className="text-sm font-medium text-[#64748B]">Country</label>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-[#E2E8F0] px-4 py-3 bg-white focus:outline-none focus:ring-4 focus:ring-[#FF9257]/20"
                >
                  {countries.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="lg:col-span-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-[#64748B]">Max Fee (USD/yr)</label>
                  <span className="text-sm font-semibold text-[#002448]">
                    {feeRange.max === 0 ? '—' : `$${effectiveMaxFee.toLocaleString()}`}
                  </span>
                </div>
                <input
                  type="range"
                  min={feeRange.min}
                  max={feeRange.max}
                  value={effectiveMaxFee}
                  onChange={(e) => setMaxFee(Number(e.target.value))}
                  disabled={feeRange.max === 0}
                  className="mt-3 w-full"
                />
                <label className="mt-3 flex items-center gap-2 text-sm text-[#64748B]">
                  <input
                    type="checkbox"
                    checked={includeVaries}
                    onChange={(e) => setIncludeVaries(e.target.checked)}
                  />
                  Include “Varies”
                </label>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3 items-center justify-between">
              <div className="text-sm text-[#64748B]">
                Showing <span className="font-semibold text-[#002448]">{filtered.length}</span> results
              </div>
              <button
                onClick={() => {
                  setSearch('');
                  setCategory('all');
                  setCountry('all');
                  setMaxFee(null);
                  setIncludeVaries(true);
                }}
                className="text-sm font-semibold text-[#FF9257] hover:underline"
              >
                Reset filters
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((course) => (
              <div key={course.id} className="card-premium hover-lift p-6">
                <div className="relative overflow-hidden rounded-xl mb-5">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.currentTarget.src = '/Bg1.png';
                    }}
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium">
                    ⭐ {course.rating}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-[#FF9257] text-white rounded-full px-3 py-1 text-sm font-medium">
                    {course.country}
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="heading-sm text-[#002448] mb-2">{course.title}</h3>
                    <p className="text-[#64748B] font-medium">{course.university}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-[#64748B]">Duration:</span>
                      <p className="font-medium">
                        {course.durationYears ? `${course.durationYears} Years` : 'Varies'}
                      </p>
                    </div>
                    <div>
                      <span className="text-[#64748B]">Tuition:</span>
                      <p className="font-medium">{course.tuitionDisplay}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[#E2E8F0]">
                    <span className="text-sm text-[#64748B]">{course.students} students</span>
                    <ButtonDisplay
                      text="Enquire"
                      px="px-4 py-2"
                      onclick="Program Enquiry"
                      variant="outline"
                      size="sm"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center mt-12 text-[#64748B]">
              No results found. Try adjusting filters.
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}



